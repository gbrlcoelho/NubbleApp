import {useEffect, useState} from 'react';

import {Page} from '@types';

export const usePaginatedList = <T>(
  getList: (page: number) => Promise<Page<T>>,
) => {
  const [list, setList] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchInitialData = async () => {
    try {
      setError(false);
      setLoading(true);
      const {data, meta} = await getList(1);
      setList(data);
      if (meta.hasNextPage) {
        setPage(2);
      } else {
        setHasNextPage(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchNextPage = async () => {
    if (loading || !hasNextPage) {
      return;
    }

    try {
      setLoading(true);
      const {data, meta} = await getList(page);
      setList(prev => [...prev, ...data]);
      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    list,
    error,
    loading,
    refresh: fetchInitialData,
    fetchNextPage,
    hasNextPage,
  };
};
