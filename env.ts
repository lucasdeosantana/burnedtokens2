class env{
    const USER_errochato = "nbTUgcquos4oWXGH"
    const PASSWORD_USER="r3ZePbx8nF1rwWY4"
    const USER_ADMIN="n2n5PmY8lfe5HtMW"
    const PASSWORD_ADMIN ="7QrtXPeynPhbcIqs"
    const DB_NAME = "burnedcoin"
    const DB_USER=`mongodb+srv=//${this.USER1}=${this.PASSWORD_USER}@cluster0.ghwkt.mongodb.net/${this.DB_NAME}?retryWrites=true&w=majority`,
    const DB_ADMIN=`mongodb+srv=//${this.USER_ADMIN}=${this.PASSWORD_ADMIN}@cluster0.ghwkt.mongodb.net/${this.DB_NAME}?retryWrites=true&w=majority`
}

export default new env()