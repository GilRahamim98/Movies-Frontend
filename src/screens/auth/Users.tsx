import axios from "axios";
import Button from "../../components/button/Button";
import IndexEntity from "../../components/entity/IndexEntity";
import { urlAccounts } from "../../endpoints";
import { userDTO } from "../../models/auth.models";
import customConfirm from "../../utils/CustomConfirm";
import Swal from "sweetalert2";

export default function Users() {
  async function makeAdmin(id: string) {
    await doAdmin(`${urlAccounts}/makeAdmin`,id)
  }
  async function removeAdmin(id: string) {
    await doAdmin(`${urlAccounts}/removeAdmin`,id)

  }
  async function doAdmin(url:string,id:string){
    await axios.post(url,JSON.stringify(id),{
        headers:{'Content-Type':'application/json'}
    })
    Swal.fire({
        title:'מעולה',
        text:'פעולה בוצעה בהצלחה',
        icon:'success'
    })
  }
  return (
    <IndexEntity<userDTO> title="משתמשים" url={`${urlAccounts}/listUsers`}>
      {(users) => (
        <>
          <thead>
            <tr>
              <th>דואר אלקטרוני</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>
                  <Button
                    className="btn btn-success ms-2"
                    onClick={() =>
                      customConfirm(
                        () => makeAdmin(user.id),
                        `האם ברצונך להפוך את ${user.email} למנהל?`,
                        "כן",
                        "לא"
                      )
                    }
                  >
                    הפוך למנהל
                  </Button>
                  <Button
                    className="btn btn-danger "
                    onClick={() =>
                      customConfirm(
                        () => removeAdmin(user.id),
                        `האם ברצונך להסיר את ${user.email} מההנהלה?`,
                        "כן",
                        "לא"
                      )
                    }
                  >
                    הסר מהנהלה{" "}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </>
      )}
    </IndexEntity>
  );
}
