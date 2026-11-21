
import { addTask, toggleTask, deleteTask } from './taskUtils';

describe('Funções de tarefas', () => {

    test('deve adicionar uma tarefa', () => {
        const resultado = addTask([], 'Estudar', 1);

        expect(resultado).toEqual([
            { id: 1, name: 'Estudar', completed: false }
        ]);
    });

    test('não deve adicionar uma tarefa vazia', () => {
        const resultado = addTask([], '   ', 1);

        expect(resultado).toEqual([]);
    });

    test('deve marcar uma tarefa como concluída', () => {
        const tarefas = [
            { id: 1, name: 'Estudar', completed: false }
        ];

        const resultado = toggleTask(tarefas, 1);

        expect(resultado[0].completed).toBe(true);
    });

    test('deve excluir uma tarefa', () => {
        const tarefas = [
            { id: 1, name: 'Estudar', completed: false }
        ];

        const resultado = deleteTask(tarefas, 1);

        expect(resultado).toEqual([]);
    });

});
