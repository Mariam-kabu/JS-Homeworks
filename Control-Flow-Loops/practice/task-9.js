let index=0;
for (let i=2; i<=10; i++) {
    for( let j=i; j>=2; j--) {
        if (i%j == 0) index++;
    }
    if (index == 1) console.log(i);
    index=0;
}