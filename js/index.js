const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
      const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
      const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
      const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
      // $('#contactoBtn').on('show.bs.modal',function(e){
      //    console.log("el modal se esta mostrando")
      // });
      const myModalEl = document.getElementById('contacto')
      myModalEl.addEventListener('show.bs.modal', event => {
            console.log("el modal se esta mostrando");
            $('#contactoBtn').removeClass("btn-outline-sucess");
            $('#contactoBtn').addClass("btn-primary");
            $('#contactoBtn').prop('disabled',true);
      })
      myModalEl.addEventListener('shown.bs.modal', event => {
            console.log("el modal se mostro");
      })
      myModalEl.addEventListener('hide.bs.modal', event => {
            console.log("el modal se esta escondiendo");
      })

      myModalEl.addEventListener('hidden.bs.modal', event => {
            console.log("el modal se escondio");
            $('#contactoBtn').removeClass("btn-primary");
            $('#contactoBtn').addClass("btn-outline-sucess");
            $('#contactoBtn').prop('disabled',false);
      })