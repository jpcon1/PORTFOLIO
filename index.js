




const handleScroll = () => {
    const e = document.getElementById('c2').getBoundingClientRect();

    if(e.top === 0){
        document.getElementById('d1').classList.add("d2")
    }

    
    


}

const scroll = document.addEventListener('scroll', handleScroll);

