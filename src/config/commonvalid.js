export default function teamvalid(parameters) {
	for(let i in parameters){
		if(parameters[i]==""){
			return false
		}
	}
	return true
}