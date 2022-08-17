class AddressBookData{

    get fullname(){ return this._fullname; }
    set fullname(fullname){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if( nameRegex.test(fullname)){
            this._fullname=fullname;
        }
        else throw 'Invalid Name';  
    }

    get phone(){ return this._phone; }
    set phone(phone){
        let phoneRegex1 = RegExp(/^[\+]?[(]?[0-9]{3}[)]?[0-9]{3}[-\s\.]?[0-9]{6,13}$/im);
        let phoneRegex3 = RegExp(/^[0-9]{3}[0-9]{7,11}$/im);

        if( phoneRegex1.test(phone)){
            this._phone=phone;
        }
        else if( phoneRegex3.test(phone)){
            this._phone=phone;
        }
        else throw 'Invalid Phone Number';  
    }

    get address(){ return this._address; }
    set address(address){
        let addressRegex = RegExp('[A-Z]{1}[a-z]{3,}');
        if( addressRegex.test(address)){
            this._address=address;
        }
        else throw 'Invalid Address';  
    }
    
    get city(){ return this._city; }
    set city(city){
        this._city=city;
    }
    
    get state(){ return this._state; }
    set state(state){
        this._state=state;
    }

    get zip(){ return this._zip; }
    set zip(zip){
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$');
        if( zipRegex.test(zip)){
            this._zip=zip;
        }
        else throw 'Invalid Zip-Code';  
    }
    
    toString(){
        return "fullname = '"+this.fullname + ", phone = '" + this.phone + ", address ='" + this.address +
                        ", city = '"+this.city+ ", state = '" + this.state +", zip-code = '" + this.zip; 
    }
}