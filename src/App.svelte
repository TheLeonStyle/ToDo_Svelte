<script>
	// Импорт компонента List
  import List from "./components/List.svelte";

	// Пытаемся получить массив объектов с задачами из localStorage
	// Если его нет, тогда получаем пустой массив
	let todos = JSON.parse(localStorage.getItem('todos')) || []

	// Глобальная переменная строки input
	let value = ''
	
	// При вводе текста в input, добавляем его значение в переменную value
	const onChangeInput = (event) => {
		value = event.target.value
	}

	// При клике на кнопку "Добавить", добавляем новую задачу в массив объектов todos
	const onClickAdd = (event) => {
		// Отключаем стандартное событие кнопки
		event.preventDefault()

		// Добавляем новую задачу в массив объектов
		todos = [...todos, {
			title: value,
			checked: false
		}]

		// Сохраняем измененный массив объектов в localStorage
		localStorage.setItem('todos', JSON.stringify(todos))
	}

	// Отслеживаем клик на галочку в задаче
	const toggleChecked = (todoChecked) => {
		// Если был клик, тогда меняем свойство checked в массиве todos на противоположный
		// Возвращаем новый массив объектов и присваиваем переменной todos
    todos = todos.map(todo => {
        if (todo === todoChecked) {
            return {
                ...todo,
                checked: !todo.checked
            };
        }
        return todo;
    });

		// Сохраняем измененный массив объектов в localStorage
		localStorage.setItem('todos', JSON.stringify(todos))
	}

	// Отслеживаем клик на удаление задачи
	const deleteTodo = (todoDeleted) => {
		// Если был клик, тогда удаляем задачу
		// Возвращаем новый массив объектов и присваиваем переменной todos
		todos = todos.filter(obj => obj !== todoDeleted)

		// Сохраняем измененный массив объектов в localStorage
		localStorage.setItem('todos', JSON.stringify(todos))
	}

	
</script>

<main>

	<div class="todo">
		<div class="todo__container">
			<form class="todo__form">
				<input class="todo__input" placeholder="Новая задача" on:change={onChangeInput} />
				<button class="todo__button" on:click={onClickAdd}>Добавить</button>
			</form>

			<ul class="todo__lists">

				<!-- Перебор массива todos и рендер компонента List, передача ему данных объектов todo в виде пропсов -->
				<!-- Также передача пропсов с функциями галочки, удаления и самого объекта -->
				{#each todos as todo}
					<List {toggleChecked} {deleteTodo} {todo}/>
				{/each}
				
			</ul>
		</div>
	</div>
	
</main>

<style lang="scss">
	.todo {
		display: flex;
		justify-content: center;
		height: 100%;
		padding: 20px;

		&__container {
			max-width: 500px;
			margin: 0 auto;
			width: 100%;
		}

		&__form {
			display: flex;
			margin-bottom: 20px;
		}

		&__input {
			flex: 1;
			padding: 10px;
			font-size: inherit;
			border: 1px solid #333;
			border-radius: 5px 0 0 5px;
			background-color: #333;
			color: #fff;
		}

		&__button {
			font-size: inherit;
			padding: 10px 20px;
			background-color: #007bff;
			color: #fff;
			border-radius: 0 5px 5px 0;
		}
	}
	
</style>
