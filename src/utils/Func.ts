export const truncate = (input: string, len: number) => {
    if (input?.length > len){
      return `${input.substring(0, len)}...`
    }else{
      return input
    } 
}