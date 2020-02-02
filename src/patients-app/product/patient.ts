enum IdentificationType {
  CITIZENSHIP_CARD = "Cedula de Ciudadanía",
  IDENTIFICATION_CARD = "Tarjeta de Identidad"
}

class Patient {
  id: number;
  firstNames: string;
  lastNames: string;
  birthDate: Date;
  identificationType: IdentificationType;
  identificationNumber: string;
  residenceAddress: string;

  constructor (
    id: number,
    firstNames: string,
    lastNames: string,
    birthDate: Date,
    identificationType: IdentificationType,
    identificationNumber: string,
    residenceAddress: string
  ){
    this.id = id
    this.firstNames = firstNames
    this.lastNames = lastNames
    this.birthDate = birthDate
    this.identificationType = identificationType
    this.identificationNumber = identificationNumber
    this.residenceAddress = residenceAddress
  }
}

export {
  Patient,
  IdentificationType
}
