import IDecodedResult from "./IDecodeResult";

type IDecodedData<T> = {decodedSession: IDecodedResult} & T;

export default IDecodedData;