import { RefCallback, MutableRefObject } from 'react';
declare type Ref<T> = RefCallback<T> | MutableRefObject<T | null>;
declare function useMergeRef<T>(refA?: Ref<T> | null, refB?: Ref<T> | null): Ref<T> | null | undefined;
export { useMergeRef };
