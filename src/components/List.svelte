<script>
	// Импорт иконок
	import checkIcon from '../assets/check.svg'
	import deleteIcon from '../assets/delete.svg'

	// Получение пропсов из App.svelte
	export let todo
	export let toggleChecked
	export let deleteTodo

	// Функция при клике на галочку, передает объект на котором был клик
	const onClickChecked = () => toggleChecked(todo)
	// Функция при клике на удаление, передает объект на котором был клик
	const onClickDeleted = () => deleteTodo(todo)
	

</script>

<li class="list">
	<p class="list__title {todo.checked ? 'active' : ''}">{todo.title}</p>
	<button class="list__checked" on:click={onClickChecked} ><img src={checkIcon} alt="Иконка галочки"></button>
	<button class="list__delete" on:click={onClickDeleted}><img src={deleteIcon} alt="Иконка удаления"></button>
</li>

<style lang="scss">
	.list {
		display: flex;
		gap: 10px;
		align-items: center;
		padding: 10px;
		background-color: #333;
		border-radius: 5px;
		&:not(:last-child) {margin-bottom: 15px;}

		&__title {
			flex: 1;

			&.active {
				text-decoration: line-through;
			}
		}

		&__checked,
		&__delete {
			cursor: pointer;
		}

		&__checked img,
		&__delete img {
			width: 26px;
			height: 26px;
		}
		
	}

	
</style>