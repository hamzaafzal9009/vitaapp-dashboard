import http from './http-common'
import config from '../config'

export default {
    gatherCandidates(search) {
        return http.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + search + '&inputtype=textquery&key=' + config.key)
    },
    getBusinessInfo(selected) {
        return http.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=' + selected + '&key=' + config.key)
    },
    displayStarRating(rating) {
      var i = 0,
          text = "";
      while (i < rating) {
        text += "<i class='fa fa-star checked'></i>";
        i++;
      }
      return text;
    },
    validatePhone() {
        if(this.location && this.location.phone) {
            this.location.phone = this.location.phone.replace(/\D/g, '')
            if(this.location.phone.startsWith('1')) {
                this.location.phone = this.location.phone.substr(1)
            }
            if(this.location.phone.length !== 10) {
                this.location.phone = this.location.phone.substr(0,10);
            }
        } if(this.customer && this.customer.phone) {
            this.customer.phone = this.customer.phone.replace(/\D/g, '')
            if(this.customer.phone.startsWith('1')) {
                this.customer.phone = this.customer.phone.substr(1)
            }
            if(this.customer.phone.length !== 10) {
                this.customer.phone = this.customer.phone.substr(0,10);
            }
        }
      },
      validateEmail() {
        this.customer.email = this.customer.email.replace(/\s/g, '').toLowerCase();
      },
      validateNotes() {
        this.customer.notes = this.customer.notes.trim();
      },
    exportAsCsv(args, csvFile) {
        let data, filename, link;

        let csv = this.convertDataToCSV({
            data: csvFile
        })
        if(csv == null) return;

        filename = args.filename || 'exported_report.csv';

        if(!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    },
    convertDataToCSV(args) {
     let result, ctr, keys, columnDelimeter, lineDelimeter, data;

     data = args.data || null;
     if(data == null || !data.length) {
         return null
     }
     columnDelimeter = args.columnDelimeter || ',';
     lineDelimeter = args.lineDelimeter || '\n';

     keys = Object.keys(data[0]);

     result = '';
     result += keys.join(columnDelimeter);
     result += lineDelimeter;

     data.forEach(item => {
         ctr = 0;
         keys.forEach(key => {
             if(ctr > 0){
                 result += columnDelimeter;
                 result += item[key];
                 ctr++
             }
             result += lineDelimeter;
         })
         return result;
     })

    }
}