const scrollToRef = (ref: string, offset: number) => {
    const element = document.getElementById(ref)
    if (!element) return
    window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth',
    })
}

export default scrollToRef;
