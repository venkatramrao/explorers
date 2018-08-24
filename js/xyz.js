class XYZ {

   constructor(spaceId,accessToken) {
      this.spaceId = spaceId;
      this.accessToken = accessToken;// 'PovA9r3IUjYkMhbwzHbQbw';
   }

   fetch(length){
        var spaceURL=`https://xyz.api.here.com/hub/spaces/${this.spaceId}/search?access_token=${this.accessToken}`;
        console.log(spaceURL);
        return new Promise((resolve,reject)=>{
            fetch(spaceURL, {
                     method: "GET",
                     mode: "cors", // no-cors, cors, *same-origin
                     headers: {
                     }
             }).then(response => response.json()).then(data => {

                   resolve(data);
             });
        });
   }

   fetchByCount(length){
           var spaceURL=`https://xyz.api.here.com/hub/spaces/${this.spaceId}/search?limit=${length}&access_token=${this.accessToken}`;

           console.log(spaceURL);
           return new Promise((resolve,reject)=>{
               fetch(spaceURL, {
                        method: "GET",
                        mode: "cors", // no-cors, cors, *same-origin
                        headers: {
                        }
                }).then(response => response.json()).then(data => {

                      resolve(data);
                });
           });
   }

//   addFeature(featureCollection, notif) {
//      startLoadingAnimation();
//      let spaceId = this.spaceId;
//      let accessToken = this.accessToken;
//      fetch(`https://xyz.api.here.com/hub/spaces/${spaceId}/features?access_token=${accessToken}`, {
//         method: "PUT",
//         mode: "cors", // no-cors, cors, *same-origin
//         headers: {
//            "Content-Type": "application/geo+json"
//         },
//         body: JSON.stringify(featureCollection)
//      }).then(response => response.json()).then(data => {
//         console.log(data)
//         if (notif) {
//            $('high-notification').innerHTML = `<lui-notification open id="validate" impact="${notif.flag}">
//               ${notif.message}
//            </lui-notification>`
//         }
//         return makeTable();
//      });
//   }

   printId() {
      console.log(this.spaceId);
   }
}
