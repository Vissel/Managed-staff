export class Staff{
	public id : number;
	public code : string;
	public name : string;
	public gender : number;
	public birthday : string;
	public phone : string;
	public email : string;
	public degree : string;
	public lookStatus : number;

	public address: string;
	public temporary :string;
	public passportNumber : number;
	public dateOfIssue : string;
	public placeOfIssue : string;
	public atmNumber : number;
	public taxCode : number; //ma so thue
	public position : string;
	public startProbation : string; //ngay bat dau thu viec
	public endProbation : string;
	public startWorking : string; 
	public endWorking : string;

	constructor(id: number, code: string, name:string, gender: number, birthday: string, phone: string,
		email: string, degree: string, lookStatus: number, address: string, temporary: string,
		passportNumber: number, dateOfIssue: string, placeOfIssue: string, atmNumber: number,
		taxCode: number, position: string, startProbation: string, endProbation: string,
		startWorking: string, endWorking: string){
		this.id = id;
		this.code = code;
		this.name = name;
		this.gender = gender;
		this.birthday = birthday;
		this.phone = phone;
		this.email = email;
		this.degree = degree;
		this.lookStatus = lookStatus;
		this.address = address;
		this.temporary = temporary;
		this.passportNumber = passportNumber;
		this.dateOfIssue = dateOfIssue;
		this.placeOfIssue = placeOfIssue;
		this.atmNumber = atmNumber;
		this.taxCode = taxCode;
		this.position = position;
		this.startProbation = startProbation;
		this.endProbation = endProbation;
		this.startWorking = startWorking;
		this.endWorking = endWorking;
	}
}