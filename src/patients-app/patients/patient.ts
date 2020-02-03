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

  constructor ()
  constructor (
    id: number,
    firstNames: string,
    lastNames: string,
    birthDate: Date,
    identificationType: IdentificationType,
    identificationNumber: string,
    residenceAddress: string
  )
  constructor (
    id?: number,
    firstNames?: string,
    lastNames?: string,
    birthDate?: Date,
    identificationType?: IdentificationType,
    identificationNumber?: string,
    residenceAddress?: string
  ){
    this.id = id ? id : 0;
    this.firstNames = firstNames ? firstNames : "";
    this.lastNames = lastNames ? lastNames : "";
    this.birthDate = birthDate ? birthDate : new Date()
    this.identificationType = identificationType ? identificationType : IdentificationType.CITIZENSHIP_CARD;
    this.identificationNumber = identificationNumber ? identificationNumber : "";
    this.residenceAddress = residenceAddress ? residenceAddress : "";
  }
}

export {
  Patient,
  IdentificationType
}
