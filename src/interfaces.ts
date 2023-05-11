export interface COMPOSITION {
    author: Author[]
    custodian: Custodian
    date: string
    encounter: Encounter
    id: string
    identifier: Identifier
    language: string
    meta: Meta
    resourceType: string
    section: Section[]
    status: string
    subject: Subject
    text: Text
    title: string
    type: Type
  }
  
 interface Author {
    display: string
    reference: string
  }
  
  interface Custodian {
    reference: string
  }
  
  interface Encounter {
    reference: string
  }
  
   interface Identifier {
    system: string
    value: string
  }
  
 interface Meta {
    lastUpdated: string
    profile: string[]
    versionId: string
  }
  
  interface Section {
    code: Code
    entry: Entry[]
    title: string
  }
  
   interface Code {
    coding: Coding[]
  }
  
  interface Coding {
    code: string
    display: string
    system: string
  }
  
interface Entry {
    reference: string
  }
  
 interface Subject {
    reference: string
  }
  
   interface Text {
    div: string
    status: string
  }
  
  interface Type {
    coding: Coding2[]
    text: string
  }
  
   interface Coding2 {
    code: string
    display: string
    system: string
  }


  export interface DOCTOR_DETAILS {
    doctorName: string;
    doctorGcpId: string;
  }
  