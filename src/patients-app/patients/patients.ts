import {Patient, IdentificationType} from "./patient"

export const patients = [
  new Patient(
    1, "Fulanito", "Perez", new Date(),
    IdentificationType.CITIZENSHIP_CARD,
    "123456789", "Cll 45 # 35-10"
  ),
  new Patient(
    2, "Menganito", "Martinez", new Date(),
    IdentificationType.IDENTIFICATION_CARD,
    "abcdef", "Cra 6 # 96-04"
  ),
  new Patient(
    3, "Perencejo", "Jimenez", new Date(),
    IdentificationType.IDENTIFICATION_CARD,
    "ghijk", "Av 10 # 96-04"
  ),
]


// export const patients = [
//   {
//     name: 'Phone XL',
//     price: 799,
//     description: 'A large phone with one of the best screens'
//   },
//   {
//     name: 'Phone Mini',
//     price: 699,
//     description: 'A great phone with one of the best cameras'
//   },
//   {
//     name: 'Phone Standard',
//     price: 299,
//     description: ''
//   }
// ];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
