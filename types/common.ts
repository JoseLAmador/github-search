export type Results<R> = {
  total_count: number;
  incomplete_results: boolean;
  items: Array<R>;
};