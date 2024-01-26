import { useCallback } from 'react';

import { useFetch } from '@/hooks/useFetch';

export interface GetStorageRequestProps {
    key: string | null;
}

const useApiResetService = () => {
    const fetchService = useFetch();

    const getReset = useCallback(
        (params: GetStorageRequestProps, signal?: AbortSignal) => {
            return fetchService.post<GetStorageRequestProps>(`/api/storage`, {
                body: { key: params.key },
                headers: {
                    'Content-Type': 'application/json',
                },
                signal,
            });
        },
        [fetchService],
    );

    return {
        getReset,
    };
};

export default useApiResetService;
