import {useConnection} from '../helpers/useConnection';

export const saveEntity = <T>(data: T) => useConnection(
    (conn) => conn.manager.save(data),
);
