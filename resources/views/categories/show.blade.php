<x-app-layout>
    <x-slot name="header" class="w-full">
      <div class="flex gap-4 justify-between w-full">
        <div class="w-3/5">
          <h2 class="font-semibold text-xl text-gray-800 leading-tight">
              {{ __('Category') }} {{ $category->label }}
          </h2>
        </div>
        <div class="w-2/5 text-right">
          <a href="{{ route('categories.index') }}" 
            class="text-white p-2 rounded bg-blue-500 hover:bg-blue-600">
            Voir toutes les categories
          </a>
        </div>
      </div>
    </x-slot>

    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="w-full mb-12 xl:mb-0 mx-auto">
        <div class="bg-white shadow-lg rounded p-4 pb-12">
          <div class="flex flex-col gap-2 mb-4">
            <p>
              Nom
            </p>
            <p>
              {{ $category->label }}
            </p>
          </div>

          <div class="flex flex-col gap-2 mb-4">
            <p>
              Slug
            </p>
            <p>
              {{ $category->slug }}
            </p>
          </div>

          <div class="flex flex-col gap-2 mb-4">
            <p>
              Parent
            </p>
            <p>
              {{ optional($category->parent)->label ?? '' }}
            </p>
          </div>

          <form action="{{ route('categories.destroy', $category) }}" method="POST" 
            onsubmit="return confirm('Voulez vous vraiment supprimer cette categorie ?');">
            @csrf
            @method('DELETE')
            <div class="flex mt-5 w-full">
              <button type="submit" class="bg-red-500 hover:bg-red-600 text-white p-2 ml-auto rounded">
                Supprimer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</x-app-layout>
