import {Connection} from 'typeorm';

export const saveEntity = (conn: Connection) => <T>(data: T) =>
  conn.manager.save(data);
