import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e2f',
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 24,
        color: '#ffffff',
        marginBottom: 20,
        textAlign: 'center',
    },
    listContainer: {
        paddingBottom: 100,
    },
    card: {
        backgroundColor: '#2a2a40',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
    cardTitle: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 6,
    },
    cardSubtitle: {
        color: '#a1a1b5',
        fontSize: 15,
        marginBottom: 4,
    },
    cardLevel: {
        color: '#88c9bf',
        fontSize: 14,
    },
    emptyText: {
        color: '#a1a1b5',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 16,
    },
    addButton: {
        backgroundColor: '#4a90e2',
        paddingVertical: 15,
        borderRadius: 10,
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
        width: '90%',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },

    logoutButtonText: {
        marginTop: 20,
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    }
});
