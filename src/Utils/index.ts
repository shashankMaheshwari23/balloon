export const isClient = (): boolean => {
    if (typeof window === 'undefined') return false;
    return true
} 