import { useCallback, useEffect, useState } from 'react';

export const useMediaQuery = minWidth => {
    const [targetReached, setTargetReached] = useState(false);
    const updateTarget = useCallback(e => setTargetReached(!!e.matches), []);
    useEffect(() => {
        const handler = e => updateTarget(e);
        const media = window.matchMedia(`(min-width: ${minWidth}px)`);
        media.addEventListener('change', handler);
        // Check on mount (callback is not called until a change occurs)
        if (media.matches) setTargetReached(true);
        return () => media.removeEventListener('change', handler);
    }, []);
    return targetReached;
};