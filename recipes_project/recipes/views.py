from django.shortcuts import get_object_or_404
from django.views.generic import ListView, DetailView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Category, Recipe
from .serializers import RecipeSerializer
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

class CategoryListView(ListView):
    model = Category
    template_name = 'category_list.html'
    context_object_name = 'categories'

@swagger_auto_schema(
    manual_parameters=[
        openapi.Parameter('pk', openapi.IN_PATH, description="Category ID", type=openapi.TYPE_INTEGER),
    ]
)
class RecipeListView(APIView):
    def get(self, request, pk):
        category = get_object_or_404(Category, pk=pk)
        recipes = Recipe.objects.filter(category=category)
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data)

    def post(self, request, pk):
        category = get_object_or_404(Category, pk=pk)
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(category=category)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@swagger_auto_schema(
    manual_parameters=[
        openapi.Parameter('pk', openapi.IN_PATH, description="Recipe ID", type=openapi.TYPE_INTEGER),
    ]
)
class RecipeDetailView(APIView):
    def get(self, request, pk):
        recipe = get_object_or_404(Recipe, pk=pk)
        serializer = RecipeSerializer(recipe)
        return Response(serializer.data)

    def post(self, request, pk):
        recipe = get_object_or_404(Recipe, pk=pk)
        serializer = RecipeSerializer(recipe, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
