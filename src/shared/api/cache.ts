type CacheEntry<T> = {
  expiresAt: number;
  value: T;
};

const memoryCache = new Map<string, CacheEntry<unknown>>();

const readLocalCache = <T>(key: string): CacheEntry<T> | null => {
  if (typeof window === "undefined") {
    return null;
  }
  const raw = window.localStorage.getItem(key);
  if (!raw) {
    return null;
  }
  try {
    return JSON.parse(raw) as CacheEntry<T>;
  } catch {
    window.localStorage.removeItem(key);
    return null;
  }
};

const writeLocalCache = <T>(key: string, entry: CacheEntry<T>) => {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(entry));
};

export const getCached = <T>(key: string): T | null => {
  const memory = memoryCache.get(key) as CacheEntry<T> | undefined;
  if (memory && memory.expiresAt > Date.now()) {
    return memory.value;
  }
  const local = readLocalCache<T>(key);
  if (local && local.expiresAt > Date.now()) {
    memoryCache.set(key, local);
    return local.value;
  }
  return null;
};

export const setCached = <T>(key: string, value: T, ttlMs: number) => {
  const entry: CacheEntry<T> = {
    expiresAt: Date.now() + ttlMs,
    value,
  };
  memoryCache.set(key, entry);
  writeLocalCache(key, entry);
};

export const fetchWithCache = async <T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlMs: number,
) => {
  const cached = getCached<T>(key);
  if (cached) {
    return cached;
  }
  const value = await fetcher();
  setCached(key, value, ttlMs);
  return value;
};
