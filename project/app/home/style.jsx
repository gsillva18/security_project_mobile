import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e2f',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: '#ffffff',
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: 18,
        color: '#a1a1b5',
        textAlign: 'center',
        marginBottom: 15,
    },
    loginButton: {
        backgroundColor: '#4a90e2',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 30,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#2a2a40',
        borderRadius: 12,
        width: '80%',
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 10,
    },
    modalText: {
        color: '#aaa',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    googleButton: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    googleLogo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    closeButton: {
        backgroundColor: '#555',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 25,
    },
    closeButtonText: {
        color: '#fff',
    },
});
