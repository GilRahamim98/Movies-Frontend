import Swal from "sweetalert2";

export default function customConfirm( 
    onConfirm: any,title:string="?בוודאות",
    confirmButtonText:string="מחיקה", cancelButtonText:string="ביטול"){
        Swal.fire({
            title,
            confirmButtonText,
            cancelButtonText,
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then(result=>{
            if(result.isConfirmed){
                onConfirm();
                Swal.fire({
                    icon:'success',
                    title:'!נמחק בהצלחה',
                
                })
            }
        })
   
}