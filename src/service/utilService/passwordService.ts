import bcrypt from 'bcrypt';

class PasswordService {
    static async encodePassword(password: string) {
        return await bcrypt.hash(password, 10);
    }

    static async comparePasswords(encodedPassword: string, password: string) {
        return await bcrypt.compare(encodedPassword, password);
    }
}

export default PasswordService;