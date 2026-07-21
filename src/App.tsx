import { BuilderResults } from "./components/BuilderResults";
import { EmptyState } from "./components/EmptyState";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useRecipe } from "./hooks/useRecipe";

const App = () => {
  const builder = useRecipe();

  return (
    <div className="app-shell">
      <Header onShuffle={builder.shufflePage} hasRecipe={Boolean(builder.recipe)} />
      <main className="main-content">
        {builder.recipe ? <BuilderResults {...builder} recipe={builder.recipe} /> : <EmptyState onShuffle={builder.shufflePage} />}
      </main>
      <Footer onStartOver={builder.startOver} hasRecipe={Boolean(builder.recipe)} />
    </div>
  );
};

export default App;
