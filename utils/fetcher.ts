async function fetcher<DataType>(
  url: string,
  headers?: HeadersInit,
  ): Promise<DataType> {
    const response = await fetch(url, {
      method: "GET",
      headers: headers || {},
    });

    const data: DataType = await response.json();

    if (response?.ok && data) {
      return data;
    }
    else {
      return Promise.reject(new Error("Failed to get data"));
    }
}

export default fetcher;