import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';



@Injectable({
  providedIn: 'root'
})
export class DBTaskService {

  
  db: SQLiteObject = null;
  
  constructor() { }
 
  setDatabase(db:SQLiteObject) {
    if(this.db===null)
    {
      this.db=db
    };
  }
  
  createTables():Promise<any>{
    let tables=`
    CREATE TABLE IF NOT EXISTS sesion_data
    (
      user_name TEXT PRIMARY KEY NOT NULL,
      password INTEGER NOT NULL,
      active INTEGER(1) NOT NULL
    );`;
    return this.db.executeSql(tables);
  }
  sesionActive(){
    
    let sql = `SELECT user_name,active FROM sesion_data WHERE active=1 LIMIT 1`;
   
    return this.db.executeSql(sql,[])
    
    .then(response=>{ 
      return Promise.resolve(response.rows.item(0)); 
    });
  }
  /**
* @param sesion 
   */
  getSesionData(sesion:any){
    let sql = `SELECT user_name, active FROM sesion_data
    WHERE user_name=? AND password=? LIMIT 1`;
    return this.db.executeSql(sql,[sesion.Usuario,
      sesion.Password]).then(response=>{
        return Promise.resolve(response.rows.item(0));
      });
  }
  /**
   * 
   * @param sesion 
   */
  createSesionData(sesion:any){
    let sql = `INSERT INTO sesion_data(user_name,password,active)
    VALUES(?,?,?)`;
    return this.db.executeSql(sql, [sesion.Usuario, 
      sesion.Password, sesion.Active]).then(response=>{
        return Promise.resolve(response.rows.item(0));
      });;
  }
  updateSesionData(sesion:any){
    let sql = `UPDATE sesion_data
    SET active=?
    WHERE user_name=?`;
    return this.db.executeSql(sql, [sesion.active,sesion.user_name]);
  }

  updatePassword(password: any , user_name:any){
    let sql = `UPDATE sesion_data SET password=? WHERE user_name=?`;
    return this.db.executeSql(sql,[password , user_name]);
  }

    /**
   * 
   * @param sesion 
   */
  GetUser(){
    return new Promise ((resolve , reject)=> {
      let sql = `SELECT user_name FROM sesion_data WHERE active=1 LIMIT 1`;
    this.db.executeSql(sql,[]).then(data=>{
      let arrayUsers=[];
      if (data.rows.length >0) {
        for (let index = 0; index < data.rows.length; index++) {
          arrayUsers.push(data.rows.item(index).user_name)
          
        }
      }
      resolve(arrayUsers);
    })
  })

    
    
}
  





  
 

}
