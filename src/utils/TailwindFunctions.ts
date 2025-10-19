export class TailwindFunctions {
    static getGradient(color: string){
        switch(color){
            case "sky":
                return "bg-[radial-gradient(circle_at_center,var(--color-sky-500)_0%,_rgba(34,197,94,0)_60%)]";    
            break;

            case "blue":
                return "bg-[radial-gradient(circle_at_center,var(--color-blue-500)_0%,_rgba(34,197,94,0)_60%)]";    
            break;        
        }
    }

    static getBg(color: string){
        switch(color){
            case "sky":
                return "bg-sky-500";    
            break;

            case "blue":
                return "bg-blue-500";    
            break;
            
        }
    }

    static getColsSpan(cols: number){
        switch(cols){
            case 0: 
                return " lg:col-span-0 ";
            break;

            case 1: 
                return " lg:col-span-1 ";
            break;
            
            case 2: 
                return " lg:col-span-2 ";
            break;        

            case 3: 
                return " lg:col-span-3 ";
            break;
            
            case 4: 
                return " lg:col-span-4 ";
            break;        
        }
}

}
