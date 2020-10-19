class Amazing {
    static cool() {
        console.log('cool')
    }

    wow() {
        console.log('wow')
    }
}

class Wonderful extends Amazing {
    static awesome() {
        super.cool();
        console.log('awesome');
    }

    great() {
        super.cool();
        console.log('great');
    }
}

// Amazing.cool();
// Wonderful.cool();
// Wonderful.awesome()

const instance = new Wonderful();

instance.cool();
instance.cool();
instance.awesome()