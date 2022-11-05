import pymysql as sql

class Database:
    def __init__(self, db, user='root', passwd='', port=3306, charset='utf8mb4') -> None:
        self.dados = (db, user, passwd, port, charset)
    
    def connect(self):
        con = sql.connect(database=self.dados[0], user=self.dados[1], password=self.dados[2], port=self.dados[3], charset=self.dados[4])
        return con, con.cursor()
    
    def salvar(self, dados):
        con, cursor = self.connect()
        print(dados)
        try:
            cursor.execute("INSERT INTO opinioes VALUES (DEFAULT, \'\', \'\', \'%s\')"%(dados['opiniao']))
            con.commit()
            print('salvou')
            return True
        except Exception as e:
            print()
            print(e)
            print()
            return False
        finally:
            con.close()