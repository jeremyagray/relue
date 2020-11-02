function dotProduct(one, two)
{
  let dot = 0;
  for (let i = 0; i < one.length; i++)
  {
    dot += one[i] * two[i];
  }
  return dot;
}
