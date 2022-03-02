import React from 'react'
import Swal from 'sweetalert2';
const Logout = () => {
    window.localStorage.clear();
   
   Swal.fire({
    toast: true,
    icon: 'success',
    title: "Logout successfully",
    animation: false,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });
  window.location.href = '/';
  return (
    <div>
      
    </div>
  )
}

export default Logout
