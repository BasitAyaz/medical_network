import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


export const signupUser = (obj: { email: string, password: string, id: any }) => {
    return new Promise((resolve, reject) => {
        auth().createUserWithEmailAndPassword(obj.email, obj.password).then(res => {
            obj.id = res.user.uid
            const reference = database().ref(`/users/${obj.id}`);

            reference.set({ ...obj }).then(result => {
                resolve(obj)
            }).catch(error => {
                reject(error)
            })

        }).catch(err => {
            reject(err)
        })
    })

}

export const login = () => {

}

export const post = () => {

}

export const get = () => {

}