function percentage(marks,totalmarks) {
    let percent = (marks/totalmarks)*100
    let grade = ''
    if(percent >= 90){
        grade = 'A'
    }
    else if(percent >= 80){
        grade = 'B'
    }
    else if(percent >= 70){
        grade = 'C'
    }
    else if(percent >= 60){
        grade = 'D'
    }
    else if(percent >= 50){
        grade = 'E'
    }
    else {
        grade = 'F'
    }

    console.log(`${grade} and ${percent}`)
}

percentage(888,1000)