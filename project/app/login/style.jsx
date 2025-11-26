import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#ffffff"
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 40
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        marginBottom: 30,
        textAlign: "center"
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 15,
        fontSize: 16
    },
    emailButton: {
        backgroundColor: "#333",
        marginBottom: 10
    },
    button: {
        backgroundColor: "#4285F4",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 18,
        textAlign: "center"
    }
});
