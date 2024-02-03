const handleScroll = () => {
    const e = document.getElementById('c2').getBoundingClientRect();

    if(e.top === 0){
    document.getElementById('d1').style.setProperty('animation','fadeIn 1s')
    document.getElementById('d1').style.setProperty("visibility",'visible')
    }

    
    


}



const scroll = document.addEventListener('scroll', handleScroll);

