import { Component } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
})
export class ArrayComponent {

  arrayRecursiveConverted = [];

  onArrayChange(arrayValue) {   

    try {
      arrayValue = JSON.parse(arrayValue);
    }
    catch
    {
      this.arrayRecursiveConverted = [];
    }

    this.arrayRecursiveConverted = this.flattenRecursive(arrayValue);

    if (!Array.isArray(this.arrayRecursiveConverted)) {
      this.arrayRecursiveConverted = ["Not Valid Array"];
    }

    }

  flattenRecursive(arr) {
       
    if (!Array.isArray(arr)) {
      return arr;   
    }

  var array = [];
    for (var i = 0; i < arr.length; i++) {
    
    array = array.concat(this.flattenRecursive(arr[i]));
  }
  return array;
}

}



