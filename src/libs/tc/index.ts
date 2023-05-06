/**
 * @param { Promise } promise
 * @return { Promise }
 */
 export async function tc<T> (
    promise: Promise<T>,
  ): Promise<[T, null] | [null, Error]> {
    try {
     const data = await promise;
     const result: [T, null] = [data, null];
     return result;
   } catch (err: any) {
    return [null, err];
   }
  }
  
  export default tc;