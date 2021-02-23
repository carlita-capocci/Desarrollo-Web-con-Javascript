function slider(arrImages, selector) {
  const div = $(selector);
  const img= $('<img/>');
  div.append(img);

    let i= 1;

    img.attr('src', arrImages[0])
    setInterval(() => {
        img.attr('src', arrImages[i])
        i+=1;
        if(i>=arrImages.length){
            i=0;
        }

    }, 2000);

}
