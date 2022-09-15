let is_ok = true;

let desafio = (task) => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(()=>{
                resolve(task)
        }, 10);

        } else {
            reject("Error")
        };
    });
}

export default desafio