export type Role = 'ADMIN' | 'USER';

export function getToken() {
    return localStorage.getItem('accessToken');
}

export function getRoleFromToken(): string | null {
    const token = localStorage.getItem('accessToken');
    if (!token) return null;

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));

        const clientRoles =
            payload?.resource_access?.['persona-learn']?.roles;

        if (!clientRoles || clientRoles.length === 0) return null;

        return clientRoles[0];
    } catch {
        return null;
    }
}